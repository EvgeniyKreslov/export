import { action, observable } from "mobx";
import { ICustomStore } from "../lib/types";

class CustomStore implements ICustomStore {
  @observable isModalOpen = false;

  @observable fileType = 'ods';

  @action
  setIsModalOpen = (value: boolean) => {
    this.isModalOpen = value
  };

  @action
  setFileType = (value: string) => {
    this.fileType = value
  }
}

const customStore = new CustomStore();

export default customStore;