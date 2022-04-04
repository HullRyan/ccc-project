import {
	Map,
	QuestionCircle,
	LogIn,
	AlertTriangle,
	User,
	Users,
	Activity,
} from "@geist-ui/icons";
import Link from "next/link";

export default function Home() {
	return (
		<div className="home">
			<div className="title">
				<h2>Dashboard</h2>
			</div>
			<div className="dashboard-boxes">
				<Link href="/profile">
					<a className="box">
						<User size={70} />
						<div>Profile</div>
					</a>
				</Link>
				<Link href="/map">
					<a className="box">
						<Map size={70} />
						<div>Map</div>
					</a>
				</Link>
				<Link href="/survey">
					<a className="box">
						<QuestionCircle size={70} />
						<div>Symptom Checker</div>
					</a>
				</Link>
				<Link href="/login">
					<a className="box">
						<LogIn size={70} />
						<div>Login</div>
					</a>
				</Link>
				<Link href="https://www.cdc.gov/coronavirus/2019-ncov/your-health/quarantine-isolation.html">
					<a className="box">
						<AlertTriangle size={70} />
						<div>CDC Guidelines</div>
					</a>
				</Link>
				<Link href="/posts">
					<a className="box">
						<Users size={70} />
						<div>Posts</div>
					</a>
				</Link>
			</div>

			<style jsx>
				{`
					.title {
						width: 100%;
						text-align: center;
						margin-top: -1.5rem;
						padding-bottom: 2rem;
					}
					.home {
						display: flex;
						align-items: center;
						flex-direction: column;
					}
					.dashboard-boxes {
						width: 100%;
						height: 100%;
						display: flex;
						justify-content: space-around;
						flex-wrap: wrap;
						gap: 1rem;
					}
					.box {
						width: 9rem;
						height: 9rem;
						background-color: white;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						border-radius: 6px;
						border: 2px solid #eaeaea;
						transition: all 0.2s;
						cursor: pointer;
					}
					.box:hover {
						box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
					}

					.box div {
						display: flex;
						align-items: center;
						align-text: center;
						text-align: center;
						justify-content: center;
						font-size: 1.2rem;
						font-weight: 600;
					}
				`}
			</style>
		</div>
	);
}
