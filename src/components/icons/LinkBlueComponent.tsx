// props
import { SvgProps } from "../../interface/props";

// styles
import { PathColor } from "../../styles/section_one_style";

export default function LinkBlueComponent({ classProp }: SvgProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1674_1007)">
        <PathColor
          className={classProp}
          d="M10.1667 5.83333H6.00001C5.55798 5.83333 5.13406 6.00892 4.8215 6.32148C4.50894 6.63404 4.33334 7.05797 4.33334 7.49999V15C4.33334 15.442 4.50894 15.8659 4.8215 16.1785C5.13406 16.4911 5.55798 16.6667 6.00001 16.6667H13.5C13.942 16.6667 14.366 16.4911 14.6785 16.1785C14.9911 15.8659 15.1667 15.442 15.1667 15V10.8333"
          stroke="#3e54a3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <PathColor
          className={classProp}
          d="M9.33334 11.6667L17.6667 3.33333"
          stroke="#3e54a3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <PathColor
          className={classProp}
          d="M13.5 3.33333H17.6667V7.49999"
          stroke="#3e54a3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1674_1007">
          <rect width="20" height="20" fill="#3e54a3" />
        </clipPath>
      </defs>
    </svg>
  );
}
