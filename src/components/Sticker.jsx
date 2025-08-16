import styled from "styled-components";
const Ban = styled.p`
  margin: 0;
`;

export default function Sticker({ img, label, onClick }) {
  return (
    <div
      onClick={() => onClick(label)}
      style={{ cursor: "pointer", textAlign: "center" }}
    >
      <img src={img} alt={label}></img>
      <Ban>{label}</Ban>
    </div>
  );
}
