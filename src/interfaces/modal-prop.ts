import React from 'react'

export default interface ModalProperties {
  title: string;
  description: string;
  onButtonClick?: (event: React.MouseEvent) => void;
  type: number;
}

export default interface ModalType {
  title: string;
  description: string;
  onButtonClick?: (event: React.MouseEvent) => void;
}