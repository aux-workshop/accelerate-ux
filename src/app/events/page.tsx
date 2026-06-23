"use client";

import { useState } from "react";
import EventCard from "../../components/EventCard";
import { events, EventType } from "../data/events";

export default function EventsPage() {
  const [activeType, setActiveType] = useState<EventType>("in-person");
  const [showSlackModal, setShowSlackModal] = useState(false);

  const filtered = events.filter((e) => e.type === activeType);
  const upcomingEvents = filtered.filter((e) => e.status === "upcoming");
  const pastEvents = filtered.filter((e) => e.status === "past");

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Events
        </h1>
        <p className="text-lg text-white max-w-2xl">
          This is an archive of our past and current event information.
        </p>
      </section>

      {/* Toggle */}
      <section className="flex justify-center pt-8 px-4">
        <div className="inline-flex rounded-lg border border-gray-200 bg-gray-100 p-1">
          <button
            onClick={() => setActiveType("in-person")}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              activeType === "in-person"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            In-Person Events
          </button>
          <button
            onClick={() => setActiveType("virtual")}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              activeType === "virtual"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Virtual Meetings
          </button>
        </div>
      </section>

      {/* Upcoming */}
      <section className="p-4 border-b-2 border-t-2 mt-6">
        <p className="text-lg max-w-2xl">
          Upcoming {activeType === "in-person" ? "Events" : "Meetings"}
        </p>
      </section>

      <section className="p-6 flex flex-col items-center gap-6">
        {upcomingEvents.length === 0 ? (
          <p className="text-gray-500 text-sm">None scheduled.</p>
        ) : (
          upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        )}
      </section>

      {/* Past */}
      <section className="p-4 border-b-2 border-t-2">
        <p className="text-lg max-w-2xl">
          Past {activeType === "in-person" ? "Events" : "Meetings"}
        </p>
      </section>

      <section className="p-6 flex flex-col items-center gap-6">
        {pastEvents.length === 0 ? (
          <p className="text-gray-500 text-sm">None yet.</p>
        ) : (
          pastEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={
                event.type === "virtual" && !event.slug && !event.meetingLink
                  ? () => setShowSlackModal(true)
                  : undefined
              }
            />
          ))
        )}
      </section>

      {/* Slack modal */}
      {showSlackModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setShowSlackModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Meeting Records
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Attendance, agendas, meeting notes, and action items for all past
              collaborator meetings are stored in our Slack channel.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-3">
              To request an invite, please reach out to us at{" "}
              <a
                href="mailto:auxworkshop@gmail.com"
                className="text-[#1e88b6] underline"
              >
                auxworkshop@gmail.com
              </a>
              .
            </p>
            <button
              onClick={() => setShowSlackModal(false)}
              className="mt-6 w-full rounded-lg bg-[#1e88b6] py-2 text-sm font-medium text-white hover:bg-[#1a7aa3] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
