interface Iprops {
  someName?: string;
}
export default function BaseComponent({ someName }: Iprops) {
  return <div>{someName}</div>;
}
