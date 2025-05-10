// src/components/modules/Accordion.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// Interfaces
export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultipleOpen?: boolean;
  defaultOpenId?: string | null;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultipleOpen = false,
  defaultOpenId = null,
  className = "",
}) => {
  const [openItemIds, setOpenItemIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const handleToggle = (id: string) => {
    if (allowMultipleOpen) {
      setOpenItemIds((prev) =>
        prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
      );
    } else {
      setOpenItemIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`w-full space-y-2 ${className}`}>
      {items.map((item) => {
        const isOpen = openItemIds.includes(item.id);

        return (
          <div
            key={item.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <h2>
              <button
                type="button"
                className="flex items-center justify-between w-full px-5 py-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75 transition-colors duration-150 ease-in-out"
                onClick={() => handleToggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${item.id}`}
                id={`accordion-header-${item.id}`}
              >
                <span className="flex items-center space-x-3">
                  {item.icon && (
                    <span className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                      {item.icon}
                    </span>
                  )}
                  <span className="text-sm font-medium text-gray-950">
                    {item.title}
                  </span>
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 ease-in-out ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h2>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.section
                  key={`content-${item.id}`}
                  id={`accordion-content-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-header-${item.id}`}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    collapsed: { height: 0, opacity: 0 },
                    open: { height: "auto", opacity: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 py-4 pt-2 text-sm text-gray-800">
                    {item.content}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;