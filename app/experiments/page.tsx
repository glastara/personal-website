import ExperimentsGrid from "./ExperimentsGrid";

export const metadata = {
  title: "Experiments",
  description: "Playground for experiments and prototypes.",
};

type Experiment = {
  title: string;
  href: string;
  problem: string;
  solution: string;
};

const experiments: Experiment[] = [
  {
    title: "Community Events Performance Dashboard",
    href: "https://irl-event-dashboard.lovable.app",
    problem: "Brands find it difficult to capture the ROI of IRL community events.",
    solution:
      "Events dashboard (or extension to existing analytics platform) that measures & fully captures the ROI of in-person community events. NOTE: far more metrics can/should be added, these are just a few that came to mind.",
  },
  {
    title: "Campfire",
    href: "https://community-campfire.lovable.app",
    problem: "Lack of genuine relationships between online communities.",
    solution:
      "Mini-app where subscribers/community members record short voice notes based on a weekly prompt set by a creator's team. Others can listen and react. Plus weekly digest with next prompt & 3 highlighted voicenote entries & best responses from last week. Not as full-on & time-consuming to organise as a podcast, but more human than a chatroom or email.",
  },
  {
    title: "GoodGiving",
    href: "https://good-giving-connect.lovable.app",
    problem:
      "Community members don’t feel commonalities & connections with each other, other than their interest in the creator they're going to see. This limits how fast connections can be built & scaled - they're only built through one node (the creator) rather than through multiple (each individual community member).",
    solution:
      "Attendees choose charity to donate % of their ticket price to, see which charities others donate to, and connect with each other. Charitable giving as a way to build connections, aligning people being a common, and beneficial, cause.",
  },
  {
    title: "IRL Community Event Planner",
    href: "https://irl-community-eventplanner.lovable.app/",
    problem:
      "Content creators are often unsure how to facilitate IRL connections with followers & build engagement.",
    solution:
      "Recommends IRL events for content creators to plan based on location, budget + other needs, then generates ‘Community Kit’ with suggested event agenda, sample invite message, follow-up actions post-event & interactive activity.",
  },
  {
    title: "Community Passport",
    href: "https://community-passport1.lovable.app",
    problem: "Hard to meet like-minded people IRL in digital era (at least outside a dating context).",
    solution:
      "Linktree for IRL connections --> allows you to create a micro-bio 'passport' where you fill out basic info about what you're looking to connect about, your interests, preferred meetup vibe, and when you're free. You can then share it & connect IRL with others on the Community Passport Directory. V2 would allow for proper filtering by location, interests, etc.",
  },
  {
    title: "StumbleUpon…Someone???",
    href: "https://stumble-find-a-friend.lovable.app",
    problem:
      "Hard to make friends & deep connections day-to-day → IRL networks tend to be locked in & limited to work  + existing connections once we reach adulthood.",
    solution:
      "There was a site in the early 00s called StumbleUpon where you could go, click a button, and it'd randomly bring you an interesting page on the internet. Thinking something like this, but to help form IRL connections with actual people. E.g. a webpage that recommends online community members to meet up with based on interests, gives their socials & personal website/blog pages (need to tweak so that connections are also close enough to facilitate IRL meetups). Name up for debate.",
  },
];

export default function ExperimentsPage() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-600 md:text-base">
        This page is just a playground for my restless thoughts. Prototypes will not have full functionality, things may break.
      </p>

      <div className="not-prose">
        <ExperimentsGrid experiments={experiments} />
      </div>
    </div>
  );
}

