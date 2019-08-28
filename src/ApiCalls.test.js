import React from 'react';
import {fetchAllProjects, fetchPalettesById, fetchAllPalettes, postPalette, postProject, patchProject, patchPalette, deleteProject, deletePalette} from './ApiCalls'

describe('ApiCalls', () => {

  describe('Get Projects', () => {
    let mockProject;

    beforeEach(() => {
      mockProject = {
        name: 'Fake Project'
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProject)
        })
      })
    })

    it('should be called with the correct url', async () => {
      const expected ='http://localhost:3001/api/v1/projects';
      fetchAllProjects();
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return a parsed response', async () => {
      const result = await fetchAllProjects();
      expect(result).toEqual(mockProject)
    })

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error fetching projects')
      });
      await expect(window.fetch()).rejects.toEqual('Error fetching projects');;
    })
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

    it('should return a parsed response', async() => {
      const result = await fetchAllPalettes();
      expect(result).toEqual(mockPalette)
    })

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error fetching palettes')
      });
      await expect(window.fetch()).rejects.toEqual('Error fetching palettes');;
    })
  })

  describe('Post palettes', () => {
    let mockPalette;
    let mockResponse;

    beforeEach(() => {
      mockResponse = {
        data: {
          id: 3,
          project_id: 1,
          name: "palette 3",
          color_1: "31393C",
          color_2: "2176FF",
          color_3: "33A1FD",
          color_4: "FDCA40",
          color_5: "F79824",
      }
      };
      mockPalette = mockPalette = {
        id: 3,
        project_id: 1,
        name: "palette 3",
        color_1: "31393C",
        color_2: "2176FF",
        color_3: "33A1FD",
        color_4: "FDCA40",
        color_5: "F79824",
      }
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPalette)
        });
      });
    });

    it('should post a new palette given the correct url', () => {
      const url = 'http://localhost:3001/api/v1/palettes'
      const options = {
        method: 'POST',
        body: JSON.stringify(mockPalette),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      postPalette(mockPalette);
      expect(window.fetch).toHaveBeenCalledWith(url, options);
    });

    it('should return a palette if response is ok', async () => {  
      await expect(postPalette(mockPalette)).resolves.toEqual(mockResponse.data);
    });

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error adding palette')
      });
      await expect(window.fetch()).rejects.toEqual('Error adding palette');;
    })
  })

  describe('Post projects', () => {
    let mockProject;
    let mockResponse;

    beforeEach(() => {
      mockResponse = {
        data: { name: 'Fake Project' }
      };
      mockProject = mockProject = { name: 'Fake Project'}
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProject)
        });
      });
    });

    it('should post a new project given the correct url', () => {
      const url = 'http://localhost:3001/api/v1/projects'
      const options = {
        method: 'POST',
        body: JSON.stringify(mockProject),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      postProject(mockProject);
      expect(window.fetch).toHaveBeenCalledWith(url, options);
    });

    it('should return a project if response is ok', async () => {  
      await expect(postProject(mockProject)).resolves.toEqual(mockResponse.data);
    });

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error adding project')
      });
      await expect(window.fetch()).rejects.toEqual('Error adding project');;
    })
  })

  describe('Patch projects', () => {
    let mockProject;
    let mockResponse;

    beforeEach(() => {
      mockResponse = {
        data: {name: 'Fake Project'}
      };
      mockProject = mockProject = { id: 1, name: 'Fake Project'}
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProject)
        });
      });
    });

    it('should edit a project given the correct url', () => {
      const url = `http://localhost:3001/api/v1/projects/${mockProject}`
      const options = {
        method: 'PATCH',
        body: JSON.stringify(mockProject),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      patchProject(mockProject);
      expect(window.fetch).toHaveBeenCalledWith(url, options);
    });

    it('should return a string with the project that was updated', async () => {
      const id = 1;
      const result = await patchProject(id);
      expect(result).toEqual(mockProject)
    })

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error editing project')
      });
      await expect(window.fetch()).rejects.toEqual('Error editing project');;
    })
  })

  describe('Patch palette', () => {
    let mockPalette;
    let mockResponse;

    beforeEach(() => {
      mockResponse = {
        data: {
          id: 3,
          project_id: 1,
          name: "palette 3",
          color_1: "31393C",
          color_2: "2176FF",
          color_3: "33A1FD",
          color_4: "FDCA40",
          color_5: "F79824",
        }
      };
      mockPalette = mockPalette = {
        id: 3,
        project_id: 1,
        name: "palette 3",
        color_1: "31393C",
        color_2: "2176FF",
        color_3: "33A1FD",
        color_4: "FDCA40",
        color_5: "F79824",
      }
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPalette)
        });
      });
    });

    it('should edit a palette given the correct url', () => {
      const url = `http://localhost:3001/api/v1/palettes/${mockPalette}`
      const options = {
        method: 'PATCH',
        body: JSON.stringify(mockPalette),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      patchPalette(mockPalette);
      expect(window.fetch).toHaveBeenCalledWith(url, options);
    });

    it('should return a string with the palette that was updated', async () => {
      const id = 1;
      const result = await patchPalette(id);
      expect(result).toEqual(mockPalette)
    })

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error editing palette')
      });
      await expect(window.fetch()).rejects.toEqual('Error editing palette');;
    })
  })

  describe('Delete project', () => {
    let mockProject;

    beforeEach(() => {
      mockProject = {
        id: 1,
        name: 'Fake Project'
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
        });
      });
    })

    it('should delete from api when passed the correct url', () => {
      const projectId = 1
      const url = `http://localhost:3001/api/v1/projects/${projectId}`
      const option = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      };
      deleteProject(projectId);
      expect(window.fetch).toHaveBeenCalledWith(url, option);
    });

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error deleting project')
      });
      await expect(window.fetch()).rejects.toEqual('Error deleting project');;
    })
  })

  describe('Delete palette', () => {
    let mockPalette;

    beforeEach(() => {
      mockPalette = {
        id: 3,
        project_id: 1,
        name: "palette 3",
        color_1: "31393C",
        color_2: "2176FF",
        color_3: "33A1FD",
        color_4: "FDCA40",
        color_5: "F79824",
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
        });
      });
    })

    it('should delete from api when passed the correct url', () => {
      const paletteId = 1
      const url = `http://localhost:3001/api/v1/palettes/${paletteId}`
      const option = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      };
      deletePalette(paletteId);
      expect(window.fetch).toHaveBeenCalledWith(url, option);
    });

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error deleting palette')
      });
      await expect(window.fetch()).rejects.toEqual('Error deleting palette');;
    })
  })

})
