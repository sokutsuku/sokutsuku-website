// contexts/ModalContext.tsx
"use client";

import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
// ContactFormModalのパスを実際の場所に合わせてください
import ContactFormModal from '@/components/modules/ContactFormModal';

interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      {/* モーダルコンポーネントはプロバイダー内で一度だけレンダリング */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
};
