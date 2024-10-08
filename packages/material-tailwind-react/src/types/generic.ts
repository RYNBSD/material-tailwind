import PropTypes from "prop-types";
import type { AnimatePresenceProps, Variant } from "framer-motion";
import type { UseDismissProps } from "@floating-ui/react";

// typescript types
export type colors = typeof propTypesColors[number];

export type animation = {
  initial?: Variant;
  mount?: Variant;
  unmount?: Variant;
};

export interface dismissType extends UseDismissProps {}

export type offsetType =
  | number
  | {
      mainAxis?: number;
      crossAxis?: number;
      alignmentAxis?: number | null;
    };

export interface NewAnimatePresenceProps extends Omit<AnimatePresenceProps, "children"> {
  children: React.ReactNode;
}

// javascript prop-types
export const propTypesColors = [
  "blue-gray",
  "gray",
  "brown",
  "deep-orange",
  "orange",
  "amber",
  "yellow",
  "lime",
  "light-green",
  "green",
  "teal",
  "cyan",
  "light-blue",
  "blue",
  "indigo",
  "deep-purple",
  "purple",
  "pink",
  "red",
] as const;

export const propTypesAnimation = PropTypes.shape({
  mount: PropTypes.instanceOf(Object),
  unmount: PropTypes.instanceOf(Object),
});

export const propTypesDismissType = PropTypes.shape({
  enabled: PropTypes.bool,
  escapeKey: PropTypes.bool,
  referencePress: PropTypes.bool,
  referencePressEvent: PropTypes.oneOf(["pointerdown", "mousedown", "click"]),
  outsidePress: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  outsidePressEvent: PropTypes.oneOf(["pointerdown", "mousedown", "click"]),
  ancestorScroll: PropTypes.bool,
  bubbles: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      escapeKey: PropTypes.bool,
      outsidePress: PropTypes.bool,
    }),
  ]),
});

export const propTypesOffsetType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    mainAxis: PropTypes.number,
    crossAxis: PropTypes.number,
    alignmentAxis: PropTypes.number,
  }),
]);

export const propTypesPlacements = [
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-start",
  "bottom",
  "bottom-end",
  "left-start",
  "left",
  "left-end",
] as const;
