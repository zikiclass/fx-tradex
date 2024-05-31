import Link from "next/link";

const PageNavigator = ({ text }: { text: string }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "6px",
        alignItems: "center",
        marginTop: "5rem",
        fontSize: "14px",
      }}
    >
      <Link href="/" style={{ color: "#6648fe" }}>
        Home
      </Link>
      <span style={{ color: "#777" }}>&gt; {text}</span>
    </div>
  );
};

export default PageNavigator;
