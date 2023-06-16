import dayjs from 'dayjs';

export function formatTime(timestamp, template = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(timestamp).format(template);
}
