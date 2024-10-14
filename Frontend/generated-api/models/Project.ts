/* tslint:disable */
/* eslint-disable */
/**
 * Get users endpoint
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof Project
     */
    budget?: number;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    color?: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    deadline?: string;
}

/**
 * Check if a given object implements the Project interface.
 */
export function instanceOfProject(value: object): value is Project {
    return true;
}

export function ProjectFromJSON(json: any): Project {
    return ProjectFromJSONTyped(json, false);
}

export function ProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): Project {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'budget': json['budget'] == null ? undefined : json['budget'],
        'color': json['color'] == null ? undefined : json['color'],
        'description': json['description'] == null ? undefined : json['description'],
        'deadline': json['deadline'] == null ? undefined : json['deadline'],
    };
}

  export function ProjectToJSON(json: any): Project {
      return ProjectToJSONTyped(json, false);
  }

  export function ProjectToJSONTyped(value?: Project | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'budget': value['budget'],
        'color': value['color'],
        'description': value['description'],
        'deadline': value['deadline'],
    };
}
