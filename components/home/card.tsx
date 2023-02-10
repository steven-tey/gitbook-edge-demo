import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
      <div className="flex h-60 items-center justify-center space-x-2">
        <a
          className="rounded-full bg-gray-100 px-5 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-200"
          href={`/${title.toLowerCase()}/private`}
          target="_blank"
          rel="noreferrer"
        >
          /{title.toLowerCase()}/private
        </a>
        <a
          className="rounded-full bg-gray-100 px-5 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-200"
          href={`/${title.toLowerCase()}/va`}
          target="_blank"
          rel="noreferrer"
        >
          /{title.toLowerCase()}/va
        </a>
        <a
          className="rounded-full bg-gray-100 px-5 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-200"
          href={`/${title.toLowerCase()}/canonical`}
          target="_blank"
          rel="noreferrer"
        >
          /{title.toLowerCase()}/canonical
        </a>
      </div>
      <div className="mx-auto max-w-lg text-center">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="prose-sm -mt-2 leading-normal text-gray-500 md:prose">
          <Balancer>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                    className="font-medium text-gray-800 underline transition-colors"
                  />
                ),
                code: ({ node, ...props }) => (
                  <code
                    {...props}
                    // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                    inline="true"
                    className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                  />
                ),
              }}
            >
              {description}
            </ReactMarkdown>
          </Balancer>
        </div>
      </div>
    </div>
  );
}
