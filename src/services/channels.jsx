export const fetchChannels = async() => {
  const response = await fetch(`http://localhost:1337/epg`)
  const json = await response.json()
  const channels = json.channels;

  const parsedData = channels.reduce(
    (result, channel) => {

      const updatedSchedules = channel.schedules.map((schedule, index) => {
        const uniqueId = `${channel.id}_${index}`;
        return { ...schedule, id: uniqueId };
      });

      result.channels.push({
        id: channel.id,
        title: channel.title,
        logo: 'hbo_logo.png',
      });

      result.schedules.push({
        id: `${channel.id}_schedule`,
        programs: updatedSchedules
      });
      return result;
    },
    { channels: [], schedules: [] }
  );

  return parsedData;
}