import {ContentContainer, Heading3, Heading4, Main} from "./Mains.styles.ts";

export default function Leadership(){
    return (
        <Main>
            <ContentContainer>
                <Heading3>Boston University QuestBridge Chapter</Heading3>
                <Heading4>Treasurer</Heading4>
                <ul>
                    <li>I'm the treasurer for the Boston University QuestBridge Chapter</li>
                </ul>
            </ContentContainer>

            <ContentContainer>
                <Heading3>Hack4Impact</Heading3>
                <Heading4>Teaching Assistant</Heading4>
                <ul>
                    <li>Aid in weekly workshops of fundamental web development technologies including HTML, CSS, and
                        JavaScript to 20-30 students.
                    </li>
                    <li>Guide new students in developing and debugging personal websites and web projects built-in
                        React.
                    </li>
                </ul>
            </ContentContainer>

            <ContentContainer>
                <Heading3>Boston University Student Government</Heading3>
                <Heading4>Events Staffer</Heading4>
                <ul>
                    <li>I help plan and run monthly events around BU.</li>
                </ul>
            </ContentContainer>

            <ContentContainer>
                <Heading3>Society of Hispanic Professional Engineers</Heading3>
                <Heading4>Member</Heading4>
                <ul>
                    <li>I am a member of the Society of Hispanic Profession Engineers chapter here at BU.</li>
                </ul>
            </ContentContainer>
        </Main>
    );
}