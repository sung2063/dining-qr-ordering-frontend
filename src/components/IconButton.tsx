/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
type IconButtonProps = {
  src: string;
  onClick?: () => void;
}

export default function IconButton({ src, onClick }: IconButtonProps) {
  return (
    <button
      className="headerIcon"
      onClick={onClick}>
      <img src={src} />
    </button>
  );
}
