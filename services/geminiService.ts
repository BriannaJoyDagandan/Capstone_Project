export const askLaTrinidadGuide = async (userInput: string): Promise<string> => {
  const response = await fetch('/api/chatbot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: userInput }),
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMessage = data.error || `HTTP error! status: ${response.status}`;
    throw new Error(errorMessage);
  }

  return data.text;
};
