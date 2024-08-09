import React, { forwardRef } from 'react';
import { Input } from "@chakra-ui/react";

const CustomTimeInput = forwardRef(({ value, onChange, ...props }, ref) => (
  <Input
    ref={ref}
    value={value || ""}
    onChange={(e) => onChange(e.target.value)}
    width="100%"
    {...props}
  />
));

export default CustomTimeInput;
