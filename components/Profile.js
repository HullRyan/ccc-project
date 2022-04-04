import { Card, Text, Divider, Spacer, User, Textarea } from "@geist-ui/core";
import {
	MessageCircle,
	Heart,
	HeartFill,
	FullScreen,
	Share2,
} from "@geist-ui/icons";
import { useTheme } from "@geist-ui/core";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function Profile(props) {
	const MapWithNoSSR = dynamic(() => import("../components/map"), {
		ssr: false,
	});

	if (props.user != undefined) {
		const user = props.user;

		return (
			<div>
				{console.log(user)}
				<div className="profile-top">
					<div className="profile-image">
						<Image
							alt={user.name}
							objectFit="cover"
							src={user.photo}
							height="200"
							width="200"
						/>
					</div>
					<div className="profile-info">
						<div className="profile-name">{user.name}</div>
						<div className="profile-user">@{user.id}</div>
					</div>
				</div>
                <div id="map" className="map">
                    <MapWithNoSSR lat={user.lat} lng={user.lng}/>
                </div>
				<style jsx>
					{`
						.profile-image {
							display: flex;
							border: 1px solid #eaeaea;
							border-radius: 50%;
							width: 200px;
							height: 200px;
							overflow: hidden;
						}
						.profile-top {
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							align-items: center;
							gap: 20px;
						}
						.profile-info {
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							align-items: center;
						}
						.profile-name {
							font-size: 2rem;
							letter-spacing: -0.02em;
							line-height: 1.5;
							font-weight: 700;
						}
						.profile-user {
							cursor: pointer;
							font-size: 1.1rem;
							color: #0070f3;
						}
                        .map {
                            width: 100%;
                            height: 400px;
                        }
					`}
				</style>
			</div>
		);
	} else {
		return <div>No props passed to profile component</div>;
	}
}
