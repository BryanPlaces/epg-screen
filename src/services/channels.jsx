export const fetchChannels = async() => {
  const response = await fetch(`http://localhost:1337/epg`)
  const json = await response.json()
  const channels = json.channels;

  const parsedData = channels.reduce(
    (result, channel) => {
      result.channels.push({
        id: channel.id,
        title: channel.title,
        logo: 'hbo_logo.png',
      });

      result.schedules.push({
        id: `${channel.id}_schedule`,
        programs: channel.schedules
      });
      return result;
    },
    { channels: [], schedules: [] }
  );

  return parsedData;
}