import React from "react";
import Button from './button';

export default {
  title: "Button"
};

export const Standard = () => <Button>Standard Button</Button>;
export const Primary = () => <Button primary>Primary Button</Button>;
export const Blank = () => <Button blank>Blank Button</Button>;
