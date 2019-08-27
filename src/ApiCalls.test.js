import React from 'react';
import {fetchAllProjects, fetchPalettesById, fetchAllPalettes, postPalette, postProject, patchProject, patchPalette, deleteProject, deletePalette} from './ApiCalls'

describe('ApiCalls', () => {
  describe('Get projects', () => {

  })
  
  describe('Get palettes by id', () => {
    let mockPalette;

    beforeEach(() => {
      mockPalette = [{
          id: 3,
          project_id: 1,
          name: "palette 3",
          color_1: "31393C",
          color_2: "2176FF",
          color_3: "33A1FD",
          color_4: "FDCA40",
          color_5: "F79824",
      }]

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPalette)
        })
      })
    })

    it('should be called with the correct url', async () => {
      const id = 1;
      const expected = `http://localhost:3001/api/v1/projects/${id}/palettes`;
      fetchPalettesById(id);
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return a parsed response', async () => {
      const id = 1;
      const result = await fetchPalettesById(id);
      expect(result).toEqual(mockPalette)
    })

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error fetching palette')
      });
      await expect(window.fetch(1)).rejects.toEqual('Error fetching palette');
    })
  })

  describe('Get all palettes', () => {
    let mockPalette;

    beforeEach(() => {
      mockPalette = [{
          id: 3,
          project_id: 1,
          name: "palette 3",
          color_1: "31393C",
          color_2: "2176FF",
          color_3: "33A1FD",
          color_4: "FDCA40",
          color_5: "F79824",
      }]

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPalette)
        })
      })
    })

    it('should be called with the correct url', async () => {
      const expected = `http://localhost:3001/api/v1/palettes`;
      fetchAllPalettes();
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })
  })

  describe('Post palettes', () => {
    
  })

  describe('Post projects', () => {
    
  })

  describe('Patch projects', () => {
    
  })

  describe('Patch palette', () => {
    
  })

  describe('Delete project', () => {
    
  })

  describe('Delete palette', () => {
    
  })
})