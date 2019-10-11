

const rangeData = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 20, endTime: 23 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
  { startTime: 19, endTime: 23 },

  // { startTime: 1, endTime: 2 },
  // { startTime: 2, endTime: 3 },

  // { startTime: 1, endTime: 5 },
  // { startTime: 2, endTime: 3 }
];

function mergeRanges(meetings) {

  // Create a deep copy of the meetings array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  // Sort by start time
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  // Initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    // If the current meeting overlaps with the last merged meeting, use the
    // later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {
      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

// Q: Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

// struggled:
// trying to keep track of too many vars

// learned:
// cost of sorting first is worth it
// save yourself one loop by adding the first element to the results array and starting the for loop at 1
// take it step by step, how do you know if a meeting overlaps? (it starts before the other meeting ends)