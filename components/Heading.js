import { useTheme, Button, Drawer } from "@geist-ui/core";
import { Menu } from "@geist-ui/icons";
import { useState } from "react";
import Link from "next/link";
import Logo from "../components/Logo";

export default function Heading() {
	const { palette } = useTheme();
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [drawer2Open, setDrawer2Open] = useState(false);

	function closeDrawer() {
		setDrawerOpen(false);
	}

	return (
		<div className="heading">
			<div className="drawer-button">
				<Menu size={30} onClick={() => setDrawerOpen(true)} />
			</div>
			<div
				className={drawerOpen ? "drawer" : "drawer drawer-offscreen"}
				onClick={closeDrawer}
			/>
			<div
				className={
					drawerOpen
						? "drawer-content"
						: "drawer-content drawer-content-offscreen"
				}
			>
				<div className="drawer-header">
					<Logo width="50" height="50" color={palette.success} />
					<div className="drawer-title">Covid Community Care</div>
				</div>
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
						<Link href="/survey">
							<a onClick={closeDrawer}>Survey</a>
						</Link>
						<Link href="/county">
							<a onClick={closeDrawer}>County Risk Viewer</a>
						</Link>
						<Link href="/map">
							<a onClick={closeDrawer}>Map</a>
						</Link>
					</div>
			</div>
			<style jsx global>
				{`
					.drawer {
						position: absolute;
						top: 0;
						left: 0;
						width: 1000%;
						height: 1000%;
						background-color: rgba(0, 0, 0, 0.6);
						z-index: 1500;
						display: flex;
						flex-direction: column;
						justify-content: center;
						transition: all 0.2s ease-out;
					}
					.drawer-offscreen {
						position: absolute;
						background-color: rgba(0, 0, 0, 0);
						left: -100%;
						width: 100%;
						height: 100%;
					}
					.drawer-title {
						text-transform: uppercase;
						color: #666;
						font-size: calc(0.875 * 16px);
						line-height: 1.5em;
					}
					.drawer-header {
						width: 100%;
						padding-top: 1rem;
						font-weight: normal;
						align-items: center;
						display: flex;
						flex-direction: column;
						gap: .3rem;
					}
					.drawer-content {
						position: absolute;
						display: flex;
						flex-direction: column;
						height: 100%;
						top: 0;
						left: 0;
						width: 13rem;
						z-index: 1501;
						background-color: white;
						transition: all 0.25s ease-out;
						opacity: 1;
						border-radius: 0 15px 15px 0;
						border: 1px solid #eaeaea;
					}
					.drawer-content-offscreen {
						left: -100%;
						opacity: 0;
					}
					.logo {
						color: red;
					}
					.heading {
						background-color: ${palette.accents_2};
						height: 2rem;
						diplsay: flex;
						flex-direction: row;
					}
					.drawer-button {
						padding: 0.2rem;
						cursor: pointer;
						width: 1.7rem;
						height: 1.7rem;
						justify-content: space-around;
					}
					.drawer-links {
						display: flex;
						flex-direction: column;
						padding-left: 1rem;
						padding-top: 2rem;
						gap: .2rem;
					}
				`}
			</style>
		</div>
	);
}
