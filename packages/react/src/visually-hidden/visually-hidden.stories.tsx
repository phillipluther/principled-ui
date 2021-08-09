import React from "react";
import VisuallyHidden from './visually-hidden';

export default {
  title: "Visually Hidden"
};

export const Default = () => <VisuallyHidden>This text is visually hidden.</VisuallyHidden>;
export const CustomTag = () => (
  <VisuallyHidden as='h2'>This is a visually hidden H2.</VisuallyHidden>
);
