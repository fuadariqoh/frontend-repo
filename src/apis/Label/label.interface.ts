interface ILabelService {
  getLabel: () => Promise<any>;
  updateLabel: (label: string) => Promise<any>;
}

export type { ILabelService };
