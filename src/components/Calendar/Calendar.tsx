import React from 'react';
import './Calendar.scss';
type Props = {
  calendarId: string; // e.g. "mycalendar@group.calendar.google.com"
  view?: 'MONTH' | 'WEEK' | 'AGENDA';
  tz?: string;
  height?: number;
};

export default function GoogleCalendarEmbed({
  calendarId,
  view = 'MONTH',
  tz = 'America/Chicago',
  height = 600,
}: Props) {
  const src = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
    calendarId
  )}&ctz=${encodeURIComponent(tz)}&mode=${encodeURIComponent(view)}&showTitle=0&showNav=1&showDate=1&showPrint=0`;

  return (
    <div className="calendar u-posRelative u-sizeFull">
      <iframe
        title="Google Calendar"
        src={src}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: `${height}px`,
          border: 0,
        }}
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}
