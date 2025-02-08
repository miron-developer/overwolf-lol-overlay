import "./icons.css";

// export const KillIcon = ({ animate }: { animate: boolean }) => (
//   <svg
//     className={`icon ${animate ? "animate" : ""}`}
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="green"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
//   </svg>
// );

// export const DeathIcon = ({ animate }: { animate: boolean }) => (
//   <svg
//     className={`icon ${animate ? "animate" : ""}`}
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="red"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="red" />
//     <line x1="8" y1="8" x2="16" y2="16" stroke="white" strokeWidth="2" />
//     <line x1="8" y1="16" x2="16" y2="8" stroke="white" strokeWidth="2" />
//   </svg>
// );

// export const AssistIcon = ({ animate }: { animate: boolean }) => (
//   <svg
//     className={`icon ${animate ? "animate" : ""}`}
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="yellow"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <circle
//       cx="12"
//       cy="12"
//       r="10"
//       stroke="black"
//       strokeWidth="2"
//       fill="yellow"
//     />
//     <line x1="12" y1="6" x2="12" y2="18" stroke="black" strokeWidth="2" />
//     <line x1="6" y1="12" x2="18" y2="12" stroke="black" strokeWidth="2" />
//   </svg>
// );

export const KillIcon = ({ animate }: { animate: boolean }) => (
  <img
    className={`icon ${animate ? "animate" : ""}`}
    width="20"
    height="20"
    src="/images/kda/kill.png"
  />
);

export const DeathIcon = ({ animate }: { animate: boolean }) => (
  <img
    className={`icon ${animate ? "animate" : ""}`}
    width="20"
    height="20"
    src="/images/kda/death.png"
  />
);

export const AssistIcon = ({ animate }: { animate: boolean }) => (
  <img
    className={`icon ${animate ? "animate" : ""}`}
    width="20"
    height="20"
    src="/images/kda/assist.png"
  />
);
