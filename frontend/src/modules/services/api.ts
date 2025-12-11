import { httpClient } from '../../lib/httpClient';
import { Service } from '../../types/domain';

export async function fetchServices(): Promise<Service[]> {
  try {
    return await httpClient.get<Service[]>('/services');
  } catch (error) {
    console.warn('Falling back to mock services', error);
    const { mockServices } = await import('./mockData');
    return mockServices;
  }
}
