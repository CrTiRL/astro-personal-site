import { getCollection } from 'astro:content';
export const posts = async () => (await getCollection('blog', ({data}) => !data.draft)).sort((a,b) => +b.data.date - +a.data.date);
export const projects = async () => (await getCollection('projects', ({data}) => !data.draft)).sort((a,b) => +b.data.date - +a.data.date);
export const dateLabel = (date: Date) => new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Shanghai' }).format(date).replaceAll('/', '.');
