import { IServiceType } from "../services";


export async function loadServiceBySlug(category: string, slug: string): Promise<IServiceType | null> {
  try {
    // console.log(`./${category}/${slug}`);
    
    const module = await import(`./${category}/${slug}`);    
    return module.default;
  } catch {
    return null;
  }
}
