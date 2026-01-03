import { Component, signal } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButton } from "@angular/material/button";

interface FileData {
  kind: string;
  name: string;
  extension: string | undefined;
  dateMod: number | undefined;
  size: string;
  content: string | undefined;
}

@Component({
  selector: 'app-read-buildings',
  imports: [MatButton, MatIconModule],
  templateUrl: './read-buildings.html',
  styleUrl: './read-buildings.scss',
})
export class ReadBuildings {
  // npm i @types/wicg-file-system-access
  // also in tsconfig.app.json add type ... "types": ["@types/wicg-file-system-access"]
  selectedFile!: File;
  newFile!: FileSystemFileHandle;
  fileContent: string | undefined = '';
  reader = new FileReader();
  pickerOpts: FilePickerOptions = {
    types: [
      {
        description: 'Images',
        accept: {
          'text/plain': ['.txt', '.csv', '.tsv', '.json'],
        },
      },
    ],
    excludeAcceptAllOption: true,
  };
  fileData = signal<FileData>({
    kind: '',
    name: '',
    extension: '',
    dateMod: undefined,
    size: '',
    content: '',
  });

  async getFile() {
    let fileHandle: FileSystemFileHandle;
    [fileHandle] = await window.showOpenFilePicker(this.pickerOpts);
    if (fileHandle.kind === 'file') {
      this.selectedFile = await fileHandle.getFile();
      this.reader.readAsText(this.selectedFile);
      this.reader.onload = () => {
        this.fileContent = this.reader.result?.toString();
        this.fileData.update((fileData) => ({
          ...fileData,
          kind: fileHandle.kind.toString(),
          name: this.selectedFile.name,
          extension: this.selectedFile.name.split('.').pop()?.toString(),
          dateMod: this.selectedFile.lastModified,
          size: (this.selectedFile.size / 1024).toFixed(1) + 'kB',
          content: this.fileContent,
        }));
        console.log('fileContent:', this.fileData());
      };
    }
    this.reader.onerror = function () {
      console.log('error is occured while reading file!');
    };
  }
  clear() {
    this.fileData.update((fileData) => ({
      ...fileData,
      kind: '',
      name: '',
      extension: '',
      dateMod: undefined,
      size: '',
      content: '',
    }));
  }
}
