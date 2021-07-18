import React from 'react'

export default interface ModalProperties {
  title: string;
  description: string;
  onButtonClick?: (event: React.MouseEvent) => void;
  type: number;
}

export type ChildModalProps = {
  modal: ModalProperties | null | undefined,
  onCloseButtonClick: () => void
}
