interface ErrorResponse {
  code: number;
  message: string;
  name: string;
  status: number;
}

const isError = (err: any): err is ErrorResponse =>
  typeof err === "object" &&
  "code" in err &&
  "message" in err &&
  "name" in err &&
  "status" in err;

export const apiFetch = async <T, Array extends boolean = false>(
  resource: string,
  guard: (body: any) => body is T,
  init?: RequestInit & { isArray: Array }
): Promise<Array extends true ? T[] : T> => {
  const res = await fetch(resource, init);

  let data = await res.json();
  if (isError(data))
    throw new Error(data.message || `${data.status} ${data.name}`);

  if (!res.ok) throw new Error(res.status.toString());

  const isGuarded = init?.isArray ? Array.isArray(data) : guard(data);
  if (!isGuarded) {
    throw new Error("Parsing faild");
  }

  if (init?.isArray) return data.filter(guard);
  return data;
};
