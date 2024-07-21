const ProjectTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex items-center gap-x-1">
      {tags
        .filter((_, idx: number) => idx < 3)
        .map((tag: string, idx: number) => (
          <p
            key={idx}
            className="text-sm  font-poppins px-2 py-1 rounded-md border border-ternary"
          >
            {tag}
          </p>
        ))}
    </div>
  )
}

export default ProjectTags
