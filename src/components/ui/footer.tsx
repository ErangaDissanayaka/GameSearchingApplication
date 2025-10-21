

const Footer = () => {
  return (
		<footer
			style={{
				width: "100%",
				padding: "1rem 0",
				background: "#222",
				color: "#fff",
				textAlign: "center",
				
			}}
		>
			<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
				<span style={{ fontSize: "1rem" }}>
					&copy; {new Date().getFullYear()} Game Searching Application. All rights reserved.
				</span>
			</div>
		</footer>
	);
}

export default Footer;
