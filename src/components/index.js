import React, { forwardRef } from "react";

// Img
export const Img = ({ ...props }) => <img {...props} />;

// Wrapper
export const Wrapper = ({ children, className, ...props }) => (
	<div className={`wrapper ${className ?? ""}`} {...props}>
		{children}
	</div>
);
