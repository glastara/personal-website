import ExperimentsGrid from "./ExperimentsGrid";
import type { ReactNode } from "react";

export const metadata = {
  title: "Experiments",
  description: "Playground for experiments and prototypes.",
};

type Experiment = {
  title: string;
  href: string;
  problem: ReactNode;
  solution: ReactNode;
  tags: string[];
};

const experiments: Experiment[] = [
  {
    title: "Resonance - turn listeners into active communities",
    href: "https://resonate-action-app.lovable.app",
    tags: ["Community Health", "Creator Tools"],
    problem:
      "Podcast listeners often finish an episode feeling motivated, but have no immediate way to engage with the creator's community.",
    solution:
      "Episode companion tool (e.g. accessed via link in description after verbal CTA at end of episode from creator) where listeners state what part of the episode resonated most with them, before being recommended a simple community action based on their feelings & location.",
  },
  {
    title: "Community Onboarding Tool",
    href: "https://community-onboarding-tool.lovable.app",
    tags: ["Community Health", "Creator Tools"],
    problem:
      "Most communities onboard members with a welcome email, possibly a link to a dead Discord server, and not much else. This leaves community members at risk of feeling lonely and isolated within the community, reducing their likelihood of future engagement.",
    solution:
      "New community members are taken to an app that provides them with a structured onboarding journey. Takes 5 mins, identifies what helps them find a sense of belonging, and immediately directs them to personalised recommendations for community activities based on their answers.",
  },
  {
    title: "Anchor - applying NHS social prescribing to build communities",
    href: "https://anchor-community-connect-app.lovable.app",
    tags: ["Community Health"],
    problem: (
      <>
        <a
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10772224/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Loneliness research
        </a>{" "}
        shows that social isolation and loneliness aren’t the same thing. Some don’t feel lonely when alone, others
        feel loneliness when surrounded by people. However, there’s no mechanism in most creator communities to
        identify everyone’s individual social needs, gauge who’s struggling, and help them find genuine human
        connection.
      </>
    ),
    solution: (
      <>
        Applying the{" "}
        <a
          href="https://www.england.nhs.uk/personalisedcare/social-prescribing/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          NHS social prescribing model
        </a>
        , community members get the chance to act as ‘Anchors’. Assuming the role of{" "}
        <a
          href="https://www.england.nhs.uk/personalisedcare/workforce-and-training/social-prescribing-link-workers/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          link workers
        </a>{" "}
        in the NHS model, they’re trained via a short in-app guide to help other community members feel more connected
        and suggest community activities to participate in. The person seeking connection engages in a human
        conversation rather than receiving a suggestion from an algorithm. The ‘Anchor’ gets a sense of purpose from
        helping others.
      </>
    ),  
  },
  {
    title: "Thread - community accountability groups",
    href: "https://thread-together-now.lovable.app",
    tags: ["Community Health"],
    problem: (
      <>
        Research shows that creating accountability makes us far more likely to hit our goals (see{" "}
        <a
          href="https://www.researchmasterminds.com/blog/create-accountability-to-achieve-goals"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          here
        </a>
        ), and working towards a common goal builds tighter-knit communities and makes us feel better about ourselves
        (see{" "}
        <a
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9099922/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          here
        </a>
        ). However, most creator communities don’t facilitate these kind of connections.
      </>
    ),
    solution:
      "Thread allows community members to start and join small accountability groups built around a shared interest with clear challenges (e.g. a writing challenge, reading goal, business accountability group, etc.). Group members are then prompted to respond to weekly AI-generated ‘threads’ optimised to share tips and progress with other group members.",
  },
  {
    title: "Community Pulse",
    href: "https://community-pulse-irl-events.lovable.app",
    tags: ["Community Health", "Creator Tools"],
    problem:
      "Hard for creators to assess community wellbeing, and for community members to find the best events to boost their wellbeing if they’re feeling down.",
    solution:
      "Anonymous weekly check-in tool for community members: logs how they’re feeling (eventually via a rigorous, science-backed psychometric survey), and suggests a local IRL community meetup if they're struggling. For creators/community organisers, tool tracks community wellbeing & trends over time, and suggests IRL meetups to organise specifically designed to improve community wellbeing.",
  },
  {
    title: "Antidote - event check-in detox",
    href: "https://antidote-app.lovable.app",
    tags: ["IRL & Events", "Community Health"],
    problem: (
      <>
        Our attention spans are shrinking.{" "}
        <a
          href="https://searchengineland.com/meta-introduces-click-and-engage-through-attribution-updates-470629"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Research
        </a>{" "}
        shows that 46% of purchase conversions on Reels happen within 2 seconds, and Meta recently shortened what it
        counts as an ‘engaged view’ on video from 10 to 5 secs to reflect faster conversion behaviour. Community event
        attendees are likely to bring that shortened attention span with them, and may struggle to be truly present.
      </>
    ),
    solution:
      "A check-in experience that attendees open via QR code when arriving to creator IRL events. They’re prompted to complete a 60-second detox from the online world - a breathing prompt, positive reflection question, and one positive intention for the event - and are then given a personalised conversation starter to use with the first person they meet. The organiser & their team would get live stats of everyone’s check-in responses, and can tailor their talk/event accordingly.",
  },
  {
    title: "Gather - self-organised community meetups",
    href: "https://gather-local-creators.lovable.app",
    tags: ["IRL & Events"],
    problem:
      "No easy way for creators’ communities to self-organise meetups without the creator being the bottleneck.",
    solution:
      "Local meetup platform that lets community members host & attend events in their city under a creator’s brand. Creators set the culture & guidelines; communities do the organising. A scalable way for creators to grow their communities IRL.",
  },
  {
    title: "Creator Run Hub",
    href: "https://creator-run-hub.lovable.app",
    tags: ["IRL & Events", "Creator Tools"],
    problem:
      "Everyone seems to be starting or joining a run club, but there isn’t an easy way for content creators to set up and organise them.",
    solution:
      "White-label run club platform specifically designed to help content creators organise run clubs with their community members. Includes customisable landing page with creator branding (e.g. The Morning Run Club), ability to find & host runs and set up chapters across multiple cities.",
  },
  {
    title: "Retreat",
    href: "https://retreat-hosting-and-booking.lovable.app",
    tags: ["IRL & Events", "Creator Tools"],
    problem:
      "Retreats are a high-value IRL community activity, but it’s difficult for creators to host & manage them (usually organised via emails and DMs).",
    solution:
      "Creator retreat hosting & booking platform. Creators can list retreats (e.g. business-focused workshops, content hackathons, wellness retreats, etc.) and community members can apply to attend.",
  },
  {
    title: "GoodGiving",
    href: "https://good-giving-connect.lovable.app",
    tags: ["IRL & Events", "Community Health"],
    problem:
      "Community members don’t feel commonalities & connections with each other, other than their interest in the creator they're going to see. This limits how fast connections can be built & scaled - they're only built through one node (the creator) rather than through multiple (each individual community member).",
    solution:
      "Attendees choose charity to donate % of their ticket price to, see which charities others donate to, and connect with each other. Charitable giving as a way to build connections, aligning people being a common, and beneficial, cause.",
  },
  {
    title: "Post-Event Content Pipeline Generator",
    href: "https://vibe-to-viral.lovable.app",
    tags: ["IRL & Events", "Creator Tools"],
    problem:
      "Not only are IRL community events difficult to organise, but many creators lack a systematic process for turning IRL moments into social media content that’ll maximise community growth and engagement.",
    solution:
      "A post-event content pipeline tool where a creator’s team uploads key moments, videos, photos, etc., and the tool generates a content plan across multiple platforms. Each suggested piece of content is optimised for the creator’s community goals and what each platform’s algorithm rewards.",
  },
  {
    title: "Proof - Content Authentication Certificates",
    href: "https://create-your-proof.lovable.app",
    tags: ["Creator Tools"],
    problem: (
      <>
        AI makes it increasingly difficult for audiences to tell whether content is AI-generated. It&apos;s also harder for creators to make it clear that their content is authentic, and, if they&apos;re using AI, how exactly they&apos;ve used it. Increasingly important given that{" "}
        <a
          href="https://www.theguardian.com/technology/2025/dec/27/more-than-20-of-videos-shown-to-new-youtube-users-are-ai-slop-study-finds"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          &gt;20% of YouTube videos are low-quality and AI-generated
        </a>.
      </>
    ),
    solution:
      "Allow content creators to generate a ‘Content Authenticity Certificate’ for their work. Can be embedded in upload description or displayed as a website badge, and helps content creators gain & retain trust from their community. Would eventually form a Content Authentication Repository where audiences can search for their favourite creators and compare their use of AI.",
  },
  {
    title: "Community Events Performance Dashboard",
    href: "https://irl-event-dashboard.lovable.app",
    tags: ["IRL & Events", "Creator Tools"],
    problem:
      "Brands find it difficult to capture the ROI of IRL community events.",
    solution:
      "Events dashboard (or extension to existing analytics platform) that measures & fully captures the ROI of in-person community events. NOTE: far more metrics can/should be added, these are just a few that came to mind.",
  },
  {
    title: "IRL Community Event Planner",
    href: "https://irl-community-eventplanner.lovable.app/",
    tags: ["IRL & Events", "Creator Tools"],
    problem:
      "Content creators are often unsure how to facilitate IRL connections with followers & build engagement.",
    solution:
      "Recommends IRL events for content creators to plan based on location, budget and other needs, then generates ‘Community Kit’ with suggested event agenda, sample invite message, follow-up actions post-event & interactive activity.",
  },
  {
    title: "Campfire",
    href: "https://community-campfire.lovable.app",
    tags: ["Community Health"],
    problem:
      "Lack of genuine relationships between online community members.",
    solution:
      "Mini-app where subscribers (i.e. community members) record short voice notes based on a weekly prompt set by a creator's team. Others can listen and react. Plus weekly digest with next prompt & 3 highlighted voicenote entries & best responses from last week. Not as full-on & time-consuming to organise as a podcast, but more human than a chatroom or email.",
  },
  {
    title: "Community Passport",
    href: "https://community-passport1.lovable.app",
    tags: ["IRL & Events", "Community Health"],
    problem:
      "Hard to meet like-minded people IRL in digital era (at least outside of a dating context).",
    solution:
      "Linktree for IRL connections. Allows you to create a micro-bio 'passport' where you fill out basic info about what you're looking to connect about, your interests, preferred meetup vibe, and when you're free. You can then share it & meet up IRL with others on the Community Passport Directory. Members get rewards for a certain number of IRL meetups (e.g. free products & handwritten letters from creators).",
  },
  {
    title: "Rekindl",
    href: "https://rekindl-community-warmth.lovable.app",
    tags: ["Creator Tools"],
    problem:
      "Difficult for creators to identify which of their community members are engaged, which aren’t, and which are at risk of disengaging.",
    solution:
      "Community re-engagement dashboard for creators to see which members aren’t participating (e.g. haven’t opened newsletters or attended meetups in a while). Re-engagement messages then auto-generated based on each community member’s profile & engagement history, can either be sent automatically or after team member approval. Same dashboard could also be used to identify most engaged community members for prizes, collabs, etc.",
  },
  {
    title: "StumbleUponSomeone",
    href: "https://stumble-find-a-friend.lovable.app",
    tags: ["IRL & Events", "Community Health"],
    problem:
      "Hard to make friends & deep connections day-to-day → IRL networks tend to be locked in & limited to work  + existing connections once we reach adulthood.",
    solution:
      "There was a site in the early 00s called StumbleUpon where you could go, click a button, and it'd randomly bring you an interesting page on the internet. Thinking something like this, but to help form IRL connections with actual people. E.g. a webpage that recommends online community members to meet up with based on interests, gives their socials & personal website/blog pages (need to tweak so that connections are also close enough to facilitate IRL meetups). Name questionable, open to suggestions.",
  },
];

export default function ExperimentsPage() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-600 md:text-base">
        This page is just a playground for my restless thoughts. Prototypes do not have full functionality. Things may break.
      </p>

      <div className="not-prose">
        <ExperimentsGrid experiments={experiments} />
      </div>
    </div>
  );
}

