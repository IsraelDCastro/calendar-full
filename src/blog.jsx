import { Card, CardBody } from "@nextui-org/react";
import pct_blogs from "./components/pct_blogs";
import { useNavigate } from "react-router";

export default function Blog() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-4 gap-5 bg-gray-100 p-10">
      {Array.isArray(pct_blogs) &&
        pct_blogs.map((blog, index) => (
          <Card onPress={() => navigate(`/blog/${blog.slug}`)} key={index} shadow="none" isPressable>
            <CardBody>
              <h4 className="line-clamp-2">{blog.title}</h4>
            </CardBody>
          </Card>
        ))}
    </div>
  );
}
