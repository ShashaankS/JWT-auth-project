function Welcome() {
    const welcomeText = "We're glad you're here!"
  return (
    <div className="h-screen flex justify-center items-center bg-blue-500">
      <div className="text-center">
        <h1 className="text-5xl text-white font-bold">Welcome to Our App!</h1>
        <p className="text-2xl text-white mt-4">{welcomeText}</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-6">Get Started</button>
      </div>
    </div>
  );
}

export default Welcome;