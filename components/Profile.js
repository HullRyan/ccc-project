import { Card, Text, Divider, Spacer, User, Textarea } from "@geist-ui/core";
import {
	MessageCircle,
	Heart,
	HeartFill,
	FullScreen,
	Share2,
    Star
} from "@geist-ui/icons";
import { useTheme } from "@geist-ui/core";
import Image from "next/image";
import dynamic from "next/dynamic";
import { serverRuntimeConfig } from "../next.config";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
});

export default function Profile(props) {

    const { palette } = useTheme();

	if (props.user != undefined) {
		const user = props.user;

		return (
			<div className="profile">
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
						<div className="profile-name">{user.persona === true && <Star color={palette.warning}/>} {user.name}</div>
						<div className="profile-user">@{user.id}</div>
                        <div className="profile-bio">{user.bio}</div>
					</div>
					<div id="map" className="map">
						<MapWithNoSSR lat={user.lat} lng={user.lng} />
					</div>
				</div>
				<style jsx>
					{`
						.profile-image {
							display: flex;
							border: 7px solid #eaeaea;
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
                            gap: 1rem;
						}
						.profile-info {
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							align-items: center;
                            gap: .25rem;
						}
                        .profile-bio {
                            width: 100%;
                            text-align: center;
                            font-size: 1.25rem;
                        }
						.profile-name {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            gap: .5rem;
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
							height: 300px;
							border: 1px solid #eaeaea;
							border-radius: 2px;
						}
					`}
				</style>
			</div>
		);
	} else {
		return <div>No props passed to profile component</div>;
	}
}
