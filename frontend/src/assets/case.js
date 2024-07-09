export default function Case({ fillColor, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
      width={width}
      height={height}
      viewBox="0 0 100 100"
    >
      <g>
        <g>
          <path
            d="M38,29h4c0.6,0,1-0.4,1-1v-3h14v3c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1v-3c0-3.3-2.7-6-6-6H43c-3.3,0-6,2.7-6,6
             v3C37,28.6,37.4,29,38,29z"
          />
        </g>
        <g>
          <path d="M74,35H26c-3.3,0-6,2.7-6,6v32c0,3.3,2.7,6,6,6h48c3.3,0,6-2.7,6-6V41C80,37.7,77.3,35,74,35z" />
        </g>
      </g>
    </svg>
  );
}
