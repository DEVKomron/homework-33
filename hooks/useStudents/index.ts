import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent
} from "@/api";
import { Student } from "@/types";

// 🔁 GET: Fetch all students
export function useStudents() {
  return useQuery({
    queryKey: ["students"],
    queryFn: getStudents
  });
}

// ➕ POST: Add new student
export function useAddStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
    }
  });
}

// 📝 PUT: Update student
export function useUpdateStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updatedStudent }: { id: string, updatedStudent: Student }) =>
      updateStudent(id, updatedStudent),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
    }
  });
}

// ❌ DELETE: Delete student
export function useDeleteStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteStudent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
    }
  });
}
