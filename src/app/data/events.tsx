export type EventStatus = "upcoming" | "past";
export type EventType = "in-person" | "virtual";

export type EventItem = {
  id: number;
  title: string;
  date: string;
  location: string;
  slug?: string;
  image?: string;
  useGradient?: boolean;
  status: EventStatus;
  type: EventType;
  meetingLink?: string;
};

export const events: EventItem[] = [
    {
    id: 9,
    title: "Collaborator Meeting #3",
    date: "June 24, 2026",
    location: "Zoom",
    status: "past",
    type: "virtual",
  },
  {
    id: 8,
    title: "Collaborator Meeting #2",
    date: "May 27, 2026",
    location: "Zoom",
    status: "past",
    type: "virtual",
  },
  {
    id: 7,
    title: "Collaborator Meeting #1",
    date: "April 29, 2026",
    location: "Zoom",
    status: "past",
    type: "virtual",
  },
  {
    id: 6,
    title: "Collaborator Meeting — Recurring Series",
    date: "Monthly (recurring every last Wednesday of the month)",
    location: "Zoom",
    status: "upcoming",
    type: "virtual",
    meetingLink:
      "https://stanford.zoom.us/meeting/register/ehBC6BHiRWqC7qSM8lp4SQ",
  },
  {
    id: 5,
    title: "NOBUGS 2026, hosted by XFEL",
    date: "September 25",
    location: "DESY Campus, Hamburg, Germany",
    slug: "nobugs2026",
    image: "/desy.png",
    status: "upcoming",
    type: "in-person",
  },
  {
    id: 4,
    title: "AUX 2027, hosted by TBA",
    date: "February",
    location: "TBA",
    slug: "aux2027",
    useGradient: true,
    status: "upcoming",
    type: "in-person",
  },
  {
    id: 3,
    title: "AUX 2026, hosted by LBNL",
    date: "February 25–27",
    location: "1 Cyclotron Road, Berkeley, CA",
    slug: "aux2026",
    image: "/AUX2026/aux0.png",
    status: "past",
    type: "in-person",
  },
  {
    id: 2,
    title: "ICALEPCS 2025, hosted by ANL",
    date: "September 25",
    location: "17 E Monroe St, Chicago, IL",
    slug: "icalepcs2025",
    image: "/ICALEPCS2025/icalepcs0.jpg",
    status: "past",
    type: "in-person",
  },
  {
    id: 1,
    title: "AUX 2025, hosted by SLAC",
    date: "February 26–28",
    location: "2575 Sand Hill Rd, Menlo Park, CA",
    slug: "aux2025",
    image: "/slac-event.jpg",
    status: "past",
    type: "in-person",
  },
];
