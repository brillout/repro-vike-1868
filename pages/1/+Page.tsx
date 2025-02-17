import { Logo } from "../../components/Logo";

export { Page };

function Page() {
  return (
    <div>
      <Center>
        <Logo size={120} style={{marginRight: 30}} />
    {' '}
        <code style={{
          fontSize: '3rem',
            padding: '10px 17px',
            fontWeight: 500,
            borderRadius: 7,
        }}>vite-plugin-ssr</code>
      </Center>
    </div>
  );
}

function Center({ style, ...props }: any) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      {...props}
    ></div>
  );
}
