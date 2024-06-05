async function fetchData(url: string, options: RequestInit): Promise<Response> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}${url}`,
      options
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response;
  } catch (error) {
    throw new Error(
      `An error occurred while making the request: ${error.message}`
    );
  }
}

export { fetchData };
