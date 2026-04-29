function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-500",
    green: "border-green-500 bg-green-500",
    purple: "border-purple-500 bg-purple-500",
    red: "border-red-500 bg-red-500",
  };

  return (
    <div
      className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}
    >
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

function ChildProps() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">ChildProps</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia
        praesentium ea minima similique est.
      </p>
      <div className="space-y-6">
        <div>
          <h3>Card Component With Children </h3>
          <Container layout="grid">
            <Card title="User Profile">
              <p className="mb-2">
                <strong>Name:</strong>Mahammedaadil Patel
              </p>
              <p className="mb-2">
                <strong>Email:</strong>mahammedaadilpatel@g.c
              </p>
              <p className="mb-2">
                <strong>Role:</strong>Developer
              </p>
            </Card>

            <Card title="Another Profile" color="red">
              <p className="mb-2">
                <strong>Name:</strong>Parthiv Patel
              </p>
              <p className="mb-2">
                <strong>Email:</strong>parthivpatel@g.c
              </p>
              <p className="mb-2">
                <strong>Role:</strong>Banker
              </p>
            </Card>

            <Card title="Quick Actions" color="purple">
              <div className="flex flex-col gap-2">
                <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
                  Create New
                </button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
                  View All
                </button>
              </div>
            </Card>

            <Card title="Warning" color="green">
              <p>
                Your trial period ends in 5 days. Please upgrade your account to
                continue using all features.
              </p>
            </Card>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default ChildProps;
