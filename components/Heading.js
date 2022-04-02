import { useTheme, Button, Drawer } from "@geist-ui/core";
import { Menu } from "@geist-ui/icons";
import { useState } from "react";
import Link from "next/link";
import Logo from "../components/Logo";

export default function Heading() {
	const { palette } = useTheme();
	const [drawerOpen, setDrawerOpen] = useState(false);

	function closeDrawer() {
		setDrawerOpen(false);
	}

	return (
		<div className="heading">
			<div className="drawer-button">
				<Menu size={30} onClick={() => setDrawerOpen(true)} />
			</div>

			<Drawer
				visible={drawerOpen}
				onClose={() => setDrawerOpen(false)}
				placement="left"
			>
				<Drawer.Title>
                        <Logo width="50" height="50" color={palette.success}/>
				</Drawer.Title>
				<Drawer.Subtitle>Covid Community Care</Drawer.Subtitle>
				<Drawer.Content>
					<div className="drawer-links">
						<Link href="/">
							<a onClick={closeDrawer}>Home</a>
						</Link>
						<Link href="/login">
							<a onClick={closeDrawer}>Login</a>
						</Link>
						<Link href="/posts">
							<a onClick={closeDrawer}>Posts</a>
						</Link>
						<Link href="/profile">
							<a onClick={closeDrawer}>Profile</a>
						</Link>
					</div>
				</Drawer.Content>
			</Drawer>
			<style jsx global>
				{`
					.logo {
						color: red;
					}
					.heading {
						background-color: ${palette.accents_2};
						height: 2rem;
						diplsay: flex;
					}
					.drawer-button {
						padding: 0.2rem;
						cursor: pointer;
						width: 1.7rem;
						height: 1.7rem;
					}
					.drawer-links {
						display: flex;
						flex-direction: column;
					}
				`}
			</style>
		</div>
	);
}
