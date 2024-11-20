export function ContentBullet({ content }: { content: string }) {
  return (
    <li className="h-10">
      <a href="#about" className="group flex items-center py-2">
        <span className="block w-10 h-px bg-moody-blue-400 mr-2 group-hover:bg-moody-blue-200 group-hover:w-14 transition-all"></span>
        <span className="group-hover:text-moody-blue-200 group-hover:text-lg group-hover:tracking-widest group-focus-visible:text-moody-blue-200 group-focus-visible:text-lg transition-all">
          {content}
        </span>
      </a>
    </li>
  );
}
