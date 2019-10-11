function mergeRanges(meetings) {
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  meetingsCopy.sort((a, b) => a.startTime - b.startTime);
  const condensedMeetings = [meetingsCopy[0]];

  for (let i = 1; i < meetingsCopy.length; i++) {
    const currentMeeting = meetingsCopy[i];
    const lastMeeting = condensedMeetings[condensedMeetings.length - 1];
 
    if (currentMeeting.startTime <= lastMeeting.endTime) {
      lastMeeting.endTime = Math.max(currentMeeting.endTime, lastMeeting.endTime);
    } else {
      condensedMeetings.push(currentMeeting);
    }
  }
  return condensedMeetings;
}

// O(nlgn) time and O(n) space.

// [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]